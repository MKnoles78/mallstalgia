import {useState, useEffect} from 'react';
import * as api from "./api";

export function useBusinessSearch (term, location) {
    const [businesses, setBusinesses] = useState ([]);
    const [amountResults, setAmountResults] = useState();
    const [searchParams, setSearchParams] = useState({term,location});

    useEffect(() => {
        setBusinesses([]);
        const fetchData = async () => {
            try {
                const rawData = await api.get('/businesses/search', searchParams);
                const res = await rawData.json();
                setBusinesses(res.businesses);
                setAmountResults(res.total);
            } catch(e) {
                console.error(e);
            }

        };
        fetchData();
    }, [searchParams]);
    return [businesses, amountResults, searchParams, setSearchParams];
}