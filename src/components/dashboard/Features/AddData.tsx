import { useAuth } from "../../../context/AuthContext";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../../config/firebase";

export const AddData = () => {
  const { user } = useAuth();

  const addProject = async (e: any) => {
    try {
      const docRef = await setDoc(doc(db, "users", user.uid), {
        ...user,
        projects: [
          {
            name: "project 1",
            tasks: [
              {
                name: "task 1",
                description: "description 1",
                status: "todo",
              },
            ],
          },
        ],
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div>
      <Input type="text" placeholder="name project" />
      <Button text="Create" onClick={(e) => addProject(e)} />
    </div>
  );
};
