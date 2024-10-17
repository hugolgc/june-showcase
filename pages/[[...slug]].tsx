import { PageDTO } from "@/shared/page.dto";
import { PageMapper } from "@/shared/page.mapper";
import { PageService } from "@/shared/page.service";
import { ParsedUrlQuery } from "node:querystring";
import { GetServerSideProps } from "next/types";
import Head from "next/head";

interface IndexProps {
    pageDTO: PageDTO;
}

interface IndexParams extends ParsedUrlQuery {
    slug: string[];
}

export const getServerSideProps: GetServerSideProps<IndexProps, IndexParams> = async (context) => {
    const url: string = context.params?.slug ? context.params.slug.join("") : "";

    try {
        const pageDTO = await PageService.getPage(url);
        return { props: { pageDTO } };
    } catch (error) {
        console.log(error);
        return { notFound: true };
    }
};

export default function Slug(indexProps: IndexProps) {
    const page = PageMapper.toEntity(indexProps.pageDTO);

    return (
        <>
            <Head>
                <title>{page.headTitle}</title>
                <meta name="description" content="Description de June" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
                <style>{page.css}</style>
            </Head>
            <div dangerouslySetInnerHTML={{ __html: page.html }} />
        </>
    );
}
