#!/usr/bin/env node

import { existsSync, copyFileSync, mkdirSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const componentsDir = join(__dirname, '../src');
const targetDir = join(process.cwd(), 'src/components/signal-layers');

function ensureDir(dir) {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
}

function copyEssentialFiles() {
  try {
    // Always copy index.js
    const sourceIndex = join(componentsDir, 'index.js');
    const targetIndex = join(targetDir, 'index.js');
    
    if (!existsSync(targetIndex)) {
      copyFileSync(sourceIndex, targetIndex);
      console.log(`✓ Added index.js to components/signal-layers/index.js`);
    } else {
      console.log(`- Skipped index.js (already exists)`);
    }
    
    // Always copy utils folder
    const sourceUtilsDir = join(componentsDir, 'utils');
    const targetUtilsDir = join(targetDir, 'utils');
    
    if (existsSync(sourceUtilsDir)) {
      ensureDir(targetUtilsDir);
      
      const utilsFiles = readdirSync(sourceUtilsDir);
      utilsFiles.forEach(file => {
        const sourceFile = join(sourceUtilsDir, file);
        const targetFile = join(targetUtilsDir, file);
        
        if (!existsSync(targetFile)) {
          copyFileSync(sourceFile, targetFile);
          console.log(`✓ Added utils/${file} to components/signal-layers/utils/${file}`);
        } else {
          console.log(`- Skipped utils/${file} (already exists)`);
        }
      });
    }
  } catch (err) {
    console.error('Could not copy essential files:', err.message);
  }
}

function addComponent(componentName) {
  const sourceFile = join(componentsDir, `${componentName}.jsx`);
  const targetFile = join(targetDir, `${componentName}.jsx`);

  if (!existsSync(sourceFile)) {
    console.error(`Component "${componentName}" not found in signal-layers`);
    process.exit(1);
  }

  ensureDir(targetDir);

  if (existsSync(targetFile)) {
    console.log(`Component "${componentName}" already exists at ${targetFile}`);
    console.log('Skipping to preserve your customizations');
    return;
  }

  copyFileSync(sourceFile, targetFile);
  console.log(`✓ Added ${componentName} to components/signal-layers/${componentName}.jsx`);
  
  // Always copy essential files when adding a component
  copyEssentialFiles();
}

function copyAll() {
  try {
    const components = readdirSync(componentsDir)
      .filter(file => file.endsWith('.jsx'))
      .map(file => file.replace('.jsx', ''));
    
    ensureDir(targetDir);
    
    components.forEach(componentName => {
      const sourceFile = join(componentsDir, `${componentName}.jsx`);
      const targetFile = join(targetDir, `${componentName}.jsx`);

      if (!existsSync(targetFile)) {
        copyFileSync(sourceFile, targetFile);
        console.log(`✓ Added ${componentName} to components/signal-layers/${componentName}.jsx`);
      } else {
        console.log(`- Skipped ${componentName} (already exists)`);
      }
    });
    
    // Always copy essential files when copying all components
    copyEssentialFiles();
    
    console.log(`\nInstalled ${components.length} components to components/signal-layers/`);
  } catch (err) {
    console.error('Could not install components:', err.message);
  }
}

function listComponents() {
  try {
    const components = readdirSync(componentsDir)
      .filter(file => file.endsWith('.jsx'))
      .map(file => file.replace('.jsx', ''));
    
    console.log('Available components:');
    components.forEach(comp => console.log(`  - ${comp}`));
  } catch (err) {
    console.error('Could not list components:', err.message);
  }
}

function showHelp() {
  console.log(`
Usage:
  signal-layers add <component>    Add a component to your project
  signal-layers list               List available components
  signal-layers copy               Copy all components
  signal-layers help               Show this help

Examples:
  signal-layers add button
  signal-layers copy
  signal-layers list
`);
}

const command = process.argv[2];
const componentName = process.argv[3];

switch (command) {
  case 'add':
    if (!componentName) {
      console.error('Please specify a component name');
      process.exit(1);
    }
    addComponent(componentName);
    break;
 
  case 'list':
    listComponents();
    break;

  case 'copy':
    copyAll();
    break;
 

  case 'help':
  case '--help':
  case '-h':
    showHelp();
    break;
  
  default:
    console.error('Unknown command. Use "signal-layers help" for usage.');
    showHelp();
    process.exit(1);
}
