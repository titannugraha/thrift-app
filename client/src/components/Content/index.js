import React from "react";
import { Home, Item, Add, Edit, List, Brand, Column, AddBrand, EditBrand } from "../../pages";
import { Route, Routes } from "react-router-dom";
import ScrollSpy from "react-ui-scrollspy";

const Content = () => {
  return (
    <>
      <ScrollSpy>
        <Routes>
          <Route path="" element={<Home />} />

          <Route path="items" element={<Item />}>
            <Route path="" element={<List />} />
            <Route path="create" element={<Add />} />
            <Route path="edit">
              <Route path=":id" element={<Edit />} />
            </Route>
          </Route>

          <Route path="brands" element={<Brand />}>
            <Route path="" element={<Column />} />
            <Route path="create" element={<AddBrand />} />
            <Route path="edit">
              <Route path=":id" element={<EditBrand />} />
            </Route>
          </Route>
        </Routes>
      </ScrollSpy>
    </>
  );
};

export default Content;
