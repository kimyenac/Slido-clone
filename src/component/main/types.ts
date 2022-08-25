export type UtilItem = {
    id: number;
    name: string;
    icon: string;
}

export type companyLogoItem = {
    id: number;
    company: string;
    companyLogo: string;
}

export type CardItem = {
    id: number;
    title: string;
    description: string;
    icon: string;
}

export type PostItem = {
    id: number;
    title: string;
    href: string;
    thumbnail: string;
}

export type BadgeItem = {
    id: number;
    title: string;
    icon: string;
}

export type MainFeatureItem = {
    id: number;
    title: string;
    description: string;
    icon: string;
    video: string;
}

export type CustomerData = {
    id: number;
    company: string;
    companyLogo: string;
    staff: string;
    staffPhoto: string;
    comment: string;
}