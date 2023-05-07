/// <reference types="react" />
declare global {
    interface DocumentEventMap {
        ButtonClick: CustomEvent<Date>;
    }
}
declare const EventReceiver: () => JSX.Element;
export default EventReceiver;
