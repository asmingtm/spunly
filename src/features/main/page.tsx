import { PageHeader } from "@components";
import { SpinnerWheel, ActionsSection, InputSection, OptionEditorModal } from "./components";
import "./styles/page.css";

export function MainPage() {
    return (
        <main className="page-main">
            <PageHeader label="Spunly" />
            <SpinnerWheel />
            <ActionsSection />
            <InputSection />
            <OptionEditorModal />
        </main>
    );
}
