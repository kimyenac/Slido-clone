import {useEffect, useState } from "react";
import Header from "./header/Header";
import { MainMenu } from "./header/types";
import Main from "./main/Main";
import Footer from "./footer/Footer";

const PageLayout = () => {
    const [headerMenuList, setHeaderMenuList] = useState<MainMenu[]>([]);

    useEffect(() => {
        async function fetchMenuList() {
            const response = await fetch("/mock/categories.json");
            const result = await response.json();
            setHeaderMenuList(result.header);
        }

        fetchMenuList();
    }, []);

    return (
        <>
            <Header menuList={headerMenuList} />
            <Main />
            <Footer />
        </>
    );
};

export default PageLayout;