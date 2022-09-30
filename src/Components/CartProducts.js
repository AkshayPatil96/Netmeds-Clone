import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { deleteProduct } from "../Redux/Auth/action";
import { useDispatch } from "react-redux";
///let total = localStorage.getItem("totalPay") || "";

const CardProducts = (props) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const [qunts, setQunt] = useState(0);
  const { totals, setTotal, discount, setdiscount } = props;
  const { user } = useSelector((state) => state.isAuth);
  console.log(totals, "sagar");
  console.log(user);
  function remove(id, index) {
    console.log();
    let products = product.filter(function (el, i) {
      return el.id !== index;
    });
    dispatch(deleteProduct(products, id));
    setProduct([...products]);

    console.log(product);
  }
  function handelsubmit(item, index) {
    item.qunt = +qunts;
    console.log(index, item);
    console.log(product);
    Total();
  }
  function Total() {
    let total = product.reduce(function (acc, elem, index) {
      let myString = parseInt(elem.salePrice * elem.qunt);
      return acc + myString;
    }, 0);
    console.log(total);
    localStorage.setItem("totalPay", total);
    setTotal(total);
  }

  useEffect(
    () => {
      Total();
    },
    [product],
    []
  );

  const Todoserver = async () => {
    try {
      let response = await axios.get(
        `https://netmeds-backend.onrender.com/AuthDetails/${user.id}`
      );
      let data = await response.data;
      console.log(data.cart);

      setProduct([...data.cart]);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    Todoserver();
  }, []);

  function habdelchane(event) {
    event.preventDefault();
    let qunt = event.target.value;
    setQunt(qunt);
  }
  return (
    <>
      <div>
        {product.map((item, index) => {
          return (
            <>
              <div
                style={{
                  display: "flex",
                  marginLeft: "10px",
                  marginRight: "30px",
                }}
              >
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={item.imageUrl}
                  alt=""
                />
                <div style={{ width: "100%" }}>
                  <p
                    style={{
                      marginTop: "0px",
                      marginLeft: "10px",
                      marginBottom: "5px",
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      marginTop: "0px",
                      marginLeft: "10px",
                      color: "gray",
                      fontStyle: "italic",
                      fontSize: "14px",
                    }}
                  >
                    {item.seller}
                  </p>
                  {console.log(item.seller)}
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {" "}
                    <h4 style={{ color: "red" }}>{`Rs ${item.salePrice}`}</h4>
                    <label>
                      QTY:
                      <select
                        type="select"
                        onChange={habdelchane}
                        onClick={() => handelsubmit(item, index)}
                      >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                      </select>{" "}
                    </label>
                  </div>
                  <div style={{ display: "flex" }}>
                    <p>Delivery between 24-48hrs</p>
                    <div
                      style={{
                        backgroundColor: "whitesmoke",
                        width: "2px",
                        height: "50px",
                        marginLeft: "100px",
                      }}
                    ></div>
                    <button
                      onClick={() => remove(user.id, item.id)}
                      style={{
                        backgroundColor: "whitesmoke",
                        color: "gray",
                        border: "none",
                        marginLeft: "10px",
                        height: "30px",
                        marginTop: "10px",
                      }}
                    >
                      REMOVE
                    </button>
                    <button
                      style={{
                        backgroundColor: "whitesmoke",
                        color: "gray",
                        border: "none",
                        marginLeft: "10px",
                        height: "30px",
                        marginTop: "10px",
                      }}
                    >
                      SAVE FOR LATER
                    </button>
                  </div>
                </div>
              </div>
              <hr style={{ width: "95%" }}></hr>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CardProducts;
