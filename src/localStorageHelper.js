const ID_KEY = "ID";

const getId = () => {
  let id = localStorage.getItem(ID_KEY);
  if (id === undefined) {
    id = 0;
  }
  id++;
  localStorage.setItem(ID_KEY, id);
  return id;
}

export {getId};
