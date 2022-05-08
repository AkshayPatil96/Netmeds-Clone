import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const SidebarLink = styled.div`
  display: flex;
  color: #777777;
  justify-content: space-between;
  align-items: center;
  padding: 12px 10px;
  margin: 0 1%;
  list-style: none;
  text-decoration: none;
  font-size: 16px;
  border-left: 4px solid #fff;
  border-bottom: 1px solid #b4b4b484;

  .Link {
    text-decoration: none;
    color: #181e3c;
  }

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #91909090;
    border-left: 4px solid #747373;
    color: #181e3c;
    cursor: pointer;
  }
`;

export const SidebarLabel = styled.span`
  margin-left: 16px;
  color: ${(props) => (props.primary ? "#181e3c" : "#77777")};
  font-weight: ${(props) => (props.primary ? "bolder" : "400")};
`;

export const DropdownLink = styled(Link)`
  background: #fff;
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #777777;
  font-size: 14px;
  border-left: 4px solid #fff;
  /* border: 1px solid; */

  &:hover {
    background: #c4c4c490;
    border-left: 4px solid #969696;
    cursor: pointer;
    color: #181e3c;
  }

  &:last-child {
    margin-bottom: 3%;
  }
`;

const SubMenu = (items) => {
  const { category, product } = useParams();

  const item = items.items;

  // console.log("item: ", item);
  const [categories, setCategories] = useState(false);

  const showCategories = () => setCategories(!categories);

  return (
    <>
      <SidebarLink onClick={item.categories && showCategories}>
        <Link to={`/${category}/${item.path}`} className="Link">
          <FontAwesomeIcon icon={faChevronRight} className="arrow" />
          <SidebarLabel>{item.title}</SidebarLabel>
        </Link>
      </SidebarLink>
      {categories &&
        item.category.map((product, index) => {
          return (
            <DropdownLink to={`${item.path}${product.path}`} key={index}>
              {product.icon}
              <SidebarLabel>{product.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
