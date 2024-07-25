import { useInfoStore } from "@/stores/counter";

const information = useInfoStore();

export function save() {
    localStorage.setItem("User", JSON.stringify(information.Info));
  }

export function isLogged() {
    if (!localStorage.getItem("User")) {
        window.location.replace("http://localhost:5173/")
    }
}
