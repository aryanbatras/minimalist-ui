import { Button, TextField, Card, Dropdown, Slider, Switch, Spinner, ProgressBar, CheckBox, FabMenu } from "../../signal-layers";

 export const components = [
    {
      name: "Button",
      description: "Interactive button with 19 signal layers",
      signals: ["primary", "secondary", "danger", "sm", "md", "lg", "xl", "rounded", "pill", "hoverEnlarge", "pressShrink", "bounceIn"],
      component: (
        <div className="flex gap-3">
          <Button primary>Primary</Button>
        </div>
      )
    },
    {
      name: "TextField", 
      description: "Input field with validation states",
      signals: ["primary", "secondary", "sm", "md", "lg", "error", "success", "focusJump", "rounded"],
      component: (
        <div className="space-y-3">
          <TextField primary placeholder="Primary input..." />
        </div>
      )
    },
    {
      name: "Card",
      description: "Container with coherent size scaling",
      signals: ["sm", "md", "lg", "xl", "elevated", "flat", "rounded", "shadow"],
      component: (
        <Card 
          title="Card Title"
          description="This is a card component with clean styling and proper spacing."
          buttonLabel="Learn More"
        />
      )
    },
    {
      name: "Dropdown",
      description: "Menu with priority-based state management",
      signals: ["sm", "md", "lg", "alignRight", "compact", "hoverOpen", "clickOpen"],
      component: (
        <Dropdown 
          menuName="Select an option..."
          items={[
            { label: "Option 1" },
            { label: "Option 2" },
            { label: "Option 3" }
          ]}
        />
      )
    },
    {
      name: "Spinner",
      description: "Loading spinner with customizable size, color, border thickness, and animation speed",
      signals: ["xs", "sm", "md", "lg", "xl", "light", "primary", "danger", "thin", "thick", "spinSlow", "spinFast", "pause", "inline", "block", "centered", "transparent"],
      component: (
        <div className="flex items-center justify-center">
          <Spinner md primary />
        </div>
      )
    },
    {
      name: "Slider",
      description: "Range slider with value bubble and extensive customization",
      signals: ["xs", "sm", "md", "lg", "xl", "bubbleXs", "bubbleSm", "bubbleMd", "bubbleLg", "bubbleXl", "bubbleSquare", "bubblePill", "bubbleFlat", "bubbleSharp", "primary", "neutral", "square", "pill", "inline", "block", "centered", "disabled"],
      component: (
        <div className="flex items-center justify-center">
          <Slider lg defaultValue={50} />
        </div>
      )
    },
    {
      name: "ProgressBar",
      description: "Customizable progress bar with various themes, sizes, and layouts",
      signals: ["square", "primary", "success", "danger", "neutral", "transparent", "xs", "sm", "md", "lg", "xl", "responsive", "inline", "block", "centered"],
      component: (
        <div className="flex items-center justify-center">
          <ProgressBar lg primary value={75} />
        </div>
      )
    },
    {
      name: "CheckBox",
      description: "Customizable checkbox with extensive styling, label positioning, and interaction effects",
      signals: ["primary", "secondary", "danger", "success", "warning", "info", "dark", "light", "neutral", "brand", "accent", "ghost", , "xs", "sm", "md", "lg", "square", "rounded", "pill"],
      component: (
        <div className="space-y-4">
          <CheckBox md primary rounded hoverScale focusRing label="Accept Terms" defaultChecked={true} />
        </div>
      )
    },
    {
      name: "Switch",
      description: "Toggle switch with customizable size, shape, and label positioning",
      signals: ["xs", "sm", "md", "lg", "square", "pill", "labelLeft", "labelRight", "labelTop", "labelBottom", "labelHidden", "disabled"],
      component: (
        <div className="space-y-4">
          <Switch md label="Toggle" defaultChecked={true} />
        </div>
      )
    },
    {
      name: "FabMenu",
      description: "Floating action button with expandable menu actions and positioning",
      signals: ["bottomRight", "bottomLeft", "topRight", "topLeft", "sm", "md", "lg", "xl", "actionsTop", "actionsBottom", "actionsLeft", "actionsRight", "disabled", "reactHover"],
      component: (
        <div className="h-32 flex items-center justify-center bg-slate-50 rounded-lg border border-slate-100 overflow-hidden">
          <FabMenu
            className="relative"
            xl
            bottomRight 
            icon="FAB"
            actions={[{label: "Action 1", icon: "🔍"}, {label: "Action 2", icon: "⚙️"}]} 
          />
        </div>
      )
    }
  ];


export const docsSections = [
    [
        {
            id: "getting-started",
            title: "Getting Started",
            route: "/docs"
        },
        {
            id: "components",
            title: "Components",
            route: "/docs/components"
        }
    ],
    [
            ...components.map((component) => ({
                id: component.name.toLowerCase(),
                title: component.name,
                route: `/docs/components/${component.name.toLowerCase()}`
            }))
    ],
    [
       {
            id: "architecture",
            title: "Architecture Overview",
            route: "/docs/architecture"
        }
    ]
];
