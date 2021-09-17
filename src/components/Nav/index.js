import React from "react";

function Nav(props) {
    const tabs = ["About", "Projects", "Contact"];
  
    return (
      <nav class="py-8">
        <ul class="flex justify-around">
          {tabs.map((tab) => (
            <li
              className="text-2xl text-center block rounded-full hover:border-blue-200 text-purple-200 hover:bg-red-400 py-2 px-4"
              key={tab}
            >
              <a
                href={"#" + tab.toLowerCase()}
               
                onClick={() => props.handlePageChange(tab)}
                className={
                  props.currentPage === tab ? "nav-link active" : "nav-link"
                }
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  
  export default Nav;