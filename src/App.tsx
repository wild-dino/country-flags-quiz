import React, { useEffect } from "react";
import { useActions } from "@/hooks/useActions";
import GlobalStyle from "@/styles/globalStyle";
import Layout from "@/components/Layout";
import Dashboard from "@/components/Dashboard";

const App = () => {
    const {fetchCountries} = useActions();

    useEffect(() => {
        fetchCountries();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Layout>
            <GlobalStyle />
            <Dashboard/>
        </Layout>
    );
};

export default App;
