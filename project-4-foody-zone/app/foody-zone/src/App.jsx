import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchReasult from "./component/searchReasult/SearchReasult";

export const BASE_URL = "http://localhost:9000";
const FOOD_Categories = [
  { name: "All", type: "all" },
  { name: "Breakfast", type: "breakfast" },
  { name: "Lunch", type: "lunch" },
  { name: "Dinner", type: "dinner" },
];

const App = () => {
  const [foodData, setFoodData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filterdData, setFilterdData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);

        const jsonFoodData = await response.json();

        setFoodData(jsonFoodData);
        setFilterdData(jsonFoodData);
        setLoading(false);
        console.log(jsonFoodData);
      } catch (error) {
        setError("unable to fetch data.");
      }
    };

    fetchFoodData();
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;

    if (searchValue == "") {
      setFilterdData(null);
    }

    const filter = foodData?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilterdData(filter);
  };

  const filterFood = (type) => {
    if (type === "all") {
      setFilterdData(foodData);
      setSelectedBtn(type);
      return;
    }

    const filter = foodData?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilterdData(filter);
    setSelectedBtn(type);
  };

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading....</div>;

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/FoodyZone.svg" alt="logo" />
          </div>
          <div className="search">
            <input
              onChange={searchFood}
              type="text"
              placeholder="Search Food"
            />
          </div>
        </TopContainer>
        <FilterContainer>
          {FOOD_Categories.map((food_item, index) => (
            <Button
              isselected={(selectedBtn === food_item.type).toString()}
              onClick={() => filterFood(food_item.type)}
              key={food_item.type}
            >
              {food_item.name}
            </Button>
          ))}
        </FilterContainer>
      </Container>
      <SearchReasult data={filterdData} />
    </>
  );
};

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopContainer = styled.section`
  height: 140px;
  display: flex;
  align-items: center;
  padding: 16px;
  justify-content: space-between;

  .search {
    input {
      background-color: transparent;
      color: white;
      border: 1px solid red;
      border-radius: 5px;
      font-size: 16px;
      padding: 10px;

      &::placeholder {
        color: white;
      }
    }
  }

  @media (0 < width < 600px) {
    flex-direction: column;
    height: 100px;
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 14px;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  background-color: ${(props) => {
    return props.isselected === "true" ? "#f13535" : "#fb4c4c";
  }};
  outline: 1px solid
    ${(props) => {
      return props.isselected === "true" ? "#ffffff" : "#ff4343";
    }};
  color: white;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  padding: 6px 12px;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: #f13535;
  }
`;
