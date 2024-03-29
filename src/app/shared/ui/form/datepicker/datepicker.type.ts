export class DatepickerValue {

    constructor(public day: string, public month: string, public year: string) {
    }

    dateString() {
        const date = new Date(`${+this.month}/${+this.day}/${+this.year}`);
        try {
            return date?.toISOString();
        } catch (error) {
            return '';
        }
    }
}
