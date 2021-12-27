export interface ToastInterface {
    show: boolean;
    backColor: string;
    text: string;
    title: string;
    dismissTime?: number;
    position?: string;
}