export type SubMenu = {
    id: number;
    name: string;
    description?: string;
    icon?: string;
}

export type MainMenu = {
    id: number;
    name: string;
    subCategories: SubMenu[];
}

export type MenuProps = {
    menuList: MainMenu[];
}

export type MainProps = {
    item: MainMenu;
}

export type SubProps = {
    list: SubMenu[];
}

export type Tag = "button" | "a";