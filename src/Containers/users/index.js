import React, { useState, useEffect } from "react";
import People2 from "../../Assets/People2.svg";
import Seta from "../../Assets/arrow.svg";
import Trash from "../../Assets/Trash.svg";
import axios from "axios";
import {
  Container,
  H1,
  Image,
  ContainerItens,
  Button,
  User,
} from "./styles";

const Users = () => {
  const [users, setUsers] = useState([]);
   
  useEffect(() => {
    async function fetchUser() {
      const { data: newUser } = await axios.get("http://localhost:3001/users");

      setUsers(newUser);
    }
    fetchUser();
  }, []);

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);

    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  }

  return (
    <Container>
      <Image alt="logo-image" src={People2} />
      <ContainerItens>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> - <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img alt="lixeira" src={Trash} />
              </button>
            </User>
          ))}
        </ul>

        <Button to='/'>
        <img className="setaVolta" alt="seta" src={Seta} /> Voltar {" "}
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default Users;
