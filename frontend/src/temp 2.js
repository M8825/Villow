{/* <Router>
<Switch>
    <Route
        exact
        path="/"
        render={() => {
            return (
                <>
                    <Nav />
                    <ListingIndex
                        header={"Homes For You in New York, NY"}
                        paragraph={"Based on your view history"}
                    />
                    <Layout />
                    <ListingIndex
                        header={"Trending Homes in New York, NY"}
                        paragraph={"Popular listings in the area"}
                    />
                    <ListingIndex
                        header={
                            "Selling Soon Homes in New York, NY"
                        }
                        paragraph={
                            "Likely to sell faster than 80% of homes nearby"
                        }
                    />
                    <Footer />
                </>
            );
        }}
    />
    <Route exact path="/listings">
        <Nav isIndex={true} />
        <div
            style={{ height: "55px", backgroundColor: "coral" }}
        ></div>
        <div style={{ display: "flex" }}>
            <Map />
            <ListingsPage />
        </div>
    </Route>
    <Route
        path="/listings/:listingId/edit"
        component={CreateListing}
    />
    <Route exact path="/listings/new" component={CreateListing} />
    <Route
        exact
        path="/listings/:listingId"
        component={ShowListing}
    />

</Switch>
</Router> */}
