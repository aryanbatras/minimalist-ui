import { useParams } from "react-router-dom";
import { ButtonPage } from './components/Button';
import { TextFieldPage } from './components/TextField';
import { CardPage } from './components/Card';
import { DropdownPage } from './components/Dropdown';
import { SliderPage } from './components/Slider';
import { SwitchPage } from './components/Switch';
import { SpinnerPage } from './components/Spinner';
import { ProgressBarPage } from './components/ProgressBar';
import { CheckBoxPage } from './components/CheckBox';
import { FabMenuPage } from './components/FabMenu';

const componentMap = {
    button: ButtonPage,
    textfield: TextFieldPage,
    card: CardPage,
    dropdown: DropdownPage,
    slider: SliderPage,
    switch: SwitchPage,
    spinner: SpinnerPage,
    progressbar: ProgressBarPage,
    checkbox: CheckBoxPage,
    fabmenu: FabMenuPage
};

export function ComponentDetail() {
    const { componentName } = useParams();
    const Component = componentMap[componentName.toLowerCase()];
    if (!Component) { return <div>Component not found</div> };
    return <Component />;
}