import { PageProps } from '@/types';
import Hero from '@/Components/hero';
import ServiceDescription from '@/Components/services';
import TechTools from '@/Components/tools';
import { NavbarDemo } from '@/Components/navbar';
import Project from '@/Components/projects';
import Quote from '@/Components/quote';
import Footer from '@/Components/footer';

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    return (
        <>
            <NavbarDemo />
            <Hero />
            <ServiceDescription />
            <TechTools />
            <Project />
            <Quote />
            <Footer />
        </>
    );
}
