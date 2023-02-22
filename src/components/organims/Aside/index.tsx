import styled from "styled-components";
import { Button } from "../../atoms/Button";
import { useToggle } from "../../../hooks/useToggle";
import { AddBoardModal } from "../../molecules/AddBoard";

interface AsideProps {
  data: any;
  loading: boolean;
}

export const Aside = ({ data, loading }: AsideProps) => {
  const { state: openIn, toggle: setOpenIn } = useToggle();

  // console.log(projects.map((project: any) => project.name));

  // console.log(data.projects.map((project: any) => project.name[0]));
  return (
    <Container>
      <Wrapper>
        <h2>ALL BOARDS (?)</h2>

        <ul>
          {/* {projects.map((project: any, index: any) => (
            <li key={index}>{project.name}</li>
          ))} */}
        </ul>

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
`;

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30rem;
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

    li {
      background-color: var(--color-purple);
      padding: 1.6rem;
      border-radius: 0.8rem;
      cursor: pointer;
    }
  }

  button {
    width: 100%;
  }
`;
