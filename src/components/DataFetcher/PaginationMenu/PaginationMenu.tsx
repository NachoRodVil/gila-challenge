
interface PaginationMenuProps {
    pagesLength: number;
    currentPage: number;
    previousPage: () => void;
    nextPage: () => void;
    goToPage: (n: number) => void;
}

function PaginationMenu(props: PaginationMenuProps) {
    const { pagesLength, currentPage, previousPage, nextPage, goToPage } = props

    return (
        <div className="pagination-menu">
            <button disabled={currentPage === 0} onClick={() => previousPage()}>{`<`}</button>
            {
                [...Array(pagesLength)].map((e, i) => <button key={i} onClick={() => goToPage(i)} disabled={currentPage === i}>{i + 1}</button>)
            }
            <button disabled={currentPage === pagesLength - 1} onClick={() => nextPage()}>{`>`}</button>
        </div>
    );
}

export default PaginationMenu;