import { Page } from "@/shared/page.entity";
import { PageDTO } from "@/shared/page.dto";

export class PageMapper {
    static toEntity(pageDTO: PageDTO) {
        return new Page(pageDTO.title, pageDTO.html, pageDTO.css);
    }
}
