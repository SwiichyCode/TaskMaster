import { useState } from "react";
import styled from "styled-components";
import { Button } from "../../atoms/Button";
import { useToggle } from "../../../hooks/useToggle";
import { AddBoardModal } from "../../molecules/AddBoard";
import { Spinner } from "../../atoms/Spinner";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { useAuth } from "../../../context/AuthContext";
import { ConfirmButton } from "../../atoms/ConfirmButton";
import { DeleteButton } from "../../atoms/DeleteButton";
import { EditButton } from "../../atoms/EditButton";
import OutsideClickHandler from "react-outside-click-handler";

interface AsideProps {
  data: any;
  projects: any;
  loading: boolean;
}

export const Aside = ({ data, projects, loading }: AsideProps) => {
  const { state: openIn, toggle: setOpenIn } = useToggle();
  const [confirm, setConfirm] = useState(false);
  const [edit, setEdit] = useState(false);
  const { user } = useAuth();

  const handleEdit = () => {
    setEdit(true);
  };

  const handleDeleteProject = async (id: string) => {
    const docRef = doc(db, "projects", user?.uid);
    await updateDoc(docRef, {
      board: projects.filter((project: { id: string }) => project.id !== id),
    });

    setConfirm(false);
  };

  return (
    <Container>
      <Wrapper>
        <h2>ALL BOARDS ({projects?.length})</h2>

        {loading ? (
          <Spinner />
        ) : (
          <ul>
            {projects?.map((project: { id: string; name: string }) => (
              <li key={project.id}>
                <div>
                  {edit ? (
                    <input placeholder={project.name}></input>
                  ) : (
                    <span>{project.name}</span>
                  )}
                </div>

                <div className="wrapper">
                  <EditButton onClick={() => handleEdit()} />
                  {confirm ? (
                    <ConfirmButton
                      onClick={() => handleDeleteProject(project.id)}
                      onOutsideClick={() => console.log("outside")}
                    />
                  ) : (
                    <DeleteButton
                      onClick={() => {
                        setConfirm(true);

                        setTimeout(() => {
                          setConfirm(false);
                        }, 3000);
                      }}
                    />
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}

        <Button theme="primary" text="Add Board" onClick={setOpenIn} />
        <AddBoardModal open={openIn} setOpen={setOpenIn} />
      </Wrapper>
      {loading ? <p>Loading...</p> : <p>User: {data?.email}</p>}
    </Container>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  input {
    border: none;
    background: transparent;
    font-size: 1.6rem;
    width: 60%;

    &:focus {
      outline: none;
    }

    &::placeholder {
      font-size: 1.8rem;
      text-transform: capitalize;
      color: var(--color-white);
      opacity: 1;
    }
  }
`;

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25rem;
  height: 100%;
  padding: 2.4rem;
  border-right: 1px solid #151934;
  gap: 2.4rem;

  h2 {
    font-size: 1.6rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    gap: 1.6rem;

    .wrapper {
      display: flex;
      align-items: center;
      gap: 0.6rem;
    }

    li {
      height: 5.9rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: var(--color-purple);
      padding: 1.6rem;
      border-radius: 0.8rem;
      cursor: pointer;

      button {
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
      }

      &:hover button {
        opacity: 1;
      }

      span {
        text-transform: capitalize;
      }
    }
  }
`;
