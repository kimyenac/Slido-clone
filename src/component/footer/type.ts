export type FooterLink = {
    id: number;
    name: string;
    subCategories: SubFooterLink[];
}

export type SubFooterLink = {
    id: number;
    name: string;
}

export type FooterLinkItemProps = {
    isBold: boolean;
    title: string;
}

export type FooterSocial = {
    id: number;
    icon: string;
}

export type BadgeItem = {
    id: number;
    title: string;
    icon: string;
}

export type FooterSelect = {
    id: number;
    value: string;
    title: string;
}
