import axios from 'axios';
import Reminder from '../models/reminder';



class ReminderService {

    http = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com',
    });

    async getReminders() {

        const request = await this.http.get<Reminder[]>('/todos');
        return request.data;

    }

    //     async addReminder(title: string) {
    //         await request = await this.http.post<Reminder>('/todos', {title});
    //         return request.data; 
    //    }

    async addReminder(title: string) {
        const request = this.http.post<Reminder>('/todos', { title });
        return (await request).data;
    }

    async removeReminder(id: number) {
        const request = this.http.delete<Reminder>('/todos/' + id);
        return (await request).data;
    }


}

export default new ReminderService();


