import React from "react";
import { Routes, Route } from "react-router-dom";

import Create from '../pages/Create';
import Update from '../pages/Update';
import Delete from '../pages/Delete';
import List from '../pages/ListAll';
import ListByEmail from '../pages/ListByEmail';

export default function Routers() {
    return (
        <Routes>
            <Route exact path="/" element={<Create />} />
            <Route exact path="/update" element={<Update />} />
            <Route exact path="/delete" element={<Delete />} />
            <Route exact path="/listAll" element={<List />} />
            <Route exact path="/listByEmail" element={<ListByEmail />} />
        </Routes>
    )
}