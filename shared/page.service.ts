import { PageDTO } from "@/shared/page.dto";

export class PageService {
    private static readonly COLLECTION = "https://juneapi-gx6sibr8.b4a.run/pages";

    static async getPages(): Promise<PageDTO[]> {
        const response = await fetch(PageService.COLLECTION);
        return await response.json();
    }

    static async getPage(url: string): Promise<PageDTO> {
        const response = await fetch(`${PageService.COLLECTION}/${url}`);
        return await response.json();
    }
}
