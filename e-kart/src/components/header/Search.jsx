//search.jsx

import { useState, useEffect } from "react";

import { InputBase, Box, List, ListItem, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";

const SeacrchContainer = styled(Box)`
  background: #fff;
  width: 38%;
  border-radius: 5px;
  margin-left: 15px;
  display: flex;
  align-items: center;
`;

const InputSearchBase = styled(InputBase)`
  padding-left: 10px;
  width: 100%;
  font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
  color: grey;
  padding: 5px;
  display: flex;
`;

const ListWrapper = styled(List)`
  position: absolute;
  background: #FFFFFF;
  color: #000;
  margin-top: 36px;
`;


const Search = () => {

  const [text, setText] = useState("");

  const { products } = useSelector(state => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const getText = (text) => {
    setText(text);
  }


  return (
    <SeacrchContainer>
      <InputSearchBase placeholder="Search For Products"
        onChange={(e) => getText(e.target.value)}
        value={text}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      {
        text &&
        <ListWrapper>
          {
            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
              <ListItem>
                <Link
                  to={`/product/${product.id}`}
                  onClick={() => setText("")}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))
          }
        </ListWrapper>
      }

    </SeacrchContainer>
  );
};

export default Search;
