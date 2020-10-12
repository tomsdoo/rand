import rand from "./rand";
declare global {
    interface Window {
        rand: typeof rand;
    }
}
