import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
const filter = () => {
    const categories = [
        {categoryId: 1, categoryName: "Vestidos"},
        {categoryId: 2, categoryName: "roupas"},
        {categoryId: 3, categoryName: "Acessorios"},
        {categoryId: 4, categoryName: "Camisas"},
    ];
    const [category, setCategory] = useState("all");
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };
    return(
        <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center  gap-4">
            {/* Search bar */}
           <div className="relative flex items-center 2xl:w-[450px] sm:w-[420px] w-full">
            <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 text-slate-800 rounded-md px-4 py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-[#1976d2]"
            
            /> 
            <FiSearch
                className="absolute left-3 text-slate-800"
                size={20}
/>

           </div>
           <div className = "flex sm:flex-row flex-col gap-4 items-center ">
            <FormControl
            variant="outlined"
            size="small">
             <inputLabel>category</inputLabel>
             <Select
              labelId= "category-select-label"
              value={category}
              onChange={handleCategoryChange}
              label="Category"
             >
               <MenuItem value="all">All</MenuItem>
               
             </Select>
            </FormControl>
            

           </div>
        </div>
    )
}
 export default filter;