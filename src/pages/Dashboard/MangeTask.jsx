import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import CreateTaskModal from "./Modals/CreateTaskModal";
import TaskColumn from "./TaskColumn";

const MangeTask = () => {

  const [todo, setTodo] = useState([]);
  const [progress, setProgress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  
  const { data, refetch } = useQuery({
    queryKey: ['all-task', user],
    queryFn: async () => {
      // const res = await axiosSecure(/addtask?email=${user?.email});
      const res = await axiosSecure('/task');
      return res.data;
    },
  });

  useEffect(() => {
    if (data) {
      const filteredTodo = data.filter((item) => item.status === "todo");
      const filteredProgress = data.filter(
        (item) => item.status === "progress"
      );
      const filteredCompleted = data.filter(
        (item) => item.status === "completed"
      );
      setTodo([...filteredTodo]);
      setProgress([...filteredProgress]);
      setCompleted([...filteredCompleted]);
    }
  }, [data]);
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    const updatedTasks = Array.from(data);
    const [movedTask] = updatedTasks.splice(source.index, 1);
    updatedTasks.splice(destination.index, 0, movedTask);

    axiosSecure
      .patch(`/status?id=${draggableId}`, {
        status: destination.droppableId,
      })
      .then(() => {
        refetch();
      });
  };

  return (
    <div className="flex flex-col min-h-screen w-full mx-auto text-white pb-5">
      <Helmet>
        <title>Dashboard | Taskify</title>
      </Helmet>
      <div className="flex justify-center lg:justify-end items-center py-5 text-xl">
        <button
          className="px-3 py-2 bg-[#00B5FF] rounded-md hover:bg-blue-50 hover:text-[#00B5FF]"
          onClick={() => openModal()}
        >
          + Create Task
        </button>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex flex-wrap mx-auto justify-center gap-10 px-8 ">
          <Droppable droppableId="todo">
            {(provided) => (
              <TaskColumn
                provided={provided}
                title={"Todo"}
                task={todo}
                refetch={refetch}
              />
            )}
          </Droppable>
          <Droppable droppableId="progress">
            {(provided) => (
              <TaskColumn
                provided={provided}
                title={"IN-PROGRESS"}
                task={progress}
                refetch={refetch}
              />
            )}
          </Droppable>
          <Droppable droppableId="completed">
            {(provided) => (
              <TaskColumn
                provided={provided}
                title={"Completed"}
                task={completed}
                refetch={refetch}
              />
            )}
          </Droppable>
        </div>
      </DragDropContext>

      <CreateTaskModal
        isOpen={isOpen}
        closeModal={closeModal}
        refetch={refetch}
      />
    </div>
  );
};

export default MangeTask;