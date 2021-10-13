import { User } from "../User";
import { users } from "../../Model/users/students.json";
import { groups } from "../../Model/groups.json";
const writeFileP = require("write-file-p");

// subclasse Professor, que herda de User
export class Student extends User {
  list_groups() {
    return users.map((user) => user.group);
  }
  // para a criação de grupos, algo exercido pelo estudante
  create_group(group_name) {
    const existingGroupsNames = groups.map((group) => group.name);
    if (existingGroupsNames.includes(group_name)) return "Grupo já existente";

    const newGroup = { group: group_name, students: [], moderator: "Arthur" };
    groups.push(newGroup);

    var json = JSON.stringify(groups);
    writeFileP.sync(`${__dirname}/output.json`, json);

    return `Grupo ${group_name} criado`;
  }
}
