export class dashboard_selectors {
    static PROFILEBUTTON = '.fa-user-circle';
    static SPRACHWECHSEL = '.el-sub-menu__title >> nth=3';
    static ZEITRUECKMELDUNG = '.el-sub-menu__title:has-text("Zeitrückmeldung")';
    static EXPORT = '.el-sub-menu__title:has-text("Export")';
    static MANAGEMENT = '.el-sub-menu__title:has-text("Management")';
    static KOPIEREN = '.el-sub-menu__title:has-text("Kopieren")';
    static EINFUEGEN = '.el-sub-menu__title:has-text("Einfügen")';
    static KOPIERBUTTON = 'fal fa-copy fa-fw interactable';
    static DELETE = '.fa-trash-alt';
    static OK_Button = '.el-button:has-text("OK")';

    static LEFTBUTTON_RUCKMELDUNG = 'fal fa-chevron-left fa-fw navigation-item'
    static RIGHTBUTTON_RUCKMELDUNG = 'fal fa-chevron-right fa-fw navigation-item'

    static LEFTBUTTON_CALENDAR = 'button.calendar__nav-left'
    static RIGHTBUTTON_CALENDAR = 'button.calendar__nav-right'
    static MONTH_NAME = '.month-selection'
    //Profil
    static LOGOUT = 'a[href="#/logout"]';
    static PASSWORTAENDERN = '#/app/change-password';
    static BENUTZERUEBERSICHT = '#/app/user';

    static ACC_OBJECT = 'div.el-select__selected-item.el-select__placeholder';
    static REGULAR = '.el-select__wrapper.is-filterable';
    static SELECTIVE_ACC_OBJECT = 'text= "000"';
    static TASK_COMPONENT = '.task-component-item';
    static LINETEXT = '.text-proposal-item';
    static LINETEXT2 = 'input[placeholder="Enter text..."]';
    static DATEITEM = '.date-item';
    static SEND = 'li.el-menu-item:has-text("SEND")';
    static DROPDOWN = 'li.el-select-dropdown__item.accounting-object-option-item-container';
}