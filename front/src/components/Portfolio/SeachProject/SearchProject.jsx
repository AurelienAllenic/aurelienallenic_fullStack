import React, { useState, useEffect } from 'react';
import { openclassrooms1, openclassrooms2, openclassrooms3, projects } from "../../Data";
import CardSection from '../CardSection';
import './searchProject.scss';
import { useLanguage } from '../../Context/LanguageContext.jsx';

const SearchProject = () => {
    const { language } = useLanguage();
    // Combinaison de tous les projets en une seule liste de base
    const baseAllProjects = [...openclassrooms1, ...openclassrooms2, ...openclassrooms3, ...projects];
    const [searchData, setSearchData] = useState(baseAllProjects);
    const [searchValue, setSearchValue] = useState('');
    const [filterSelected, setFilterSelected] = useState([]);

    // Fonction pour filtrer les projets en fonction de la valeur et du tableau donné
    const sortProject = (value, array) => {
        return array.filter(project => {
            if (language === 'FR') {
                const title = project.title ? project.title.toLowerCase() : '';
                return title.includes(value.toLowerCase());
            } else {
                const title = project.titleEn ? project.titleEn.toLowerCase() : '';
                return title.includes(value.toLowerCase());
            }
        }).map((project, index) => ({
            ...project,
            id: `${project.title}-${index}-${Date.now()}`
        }));
    };

    // Appliquer les filtres sélectionnés aux projets
    const applyFilters = (array) => {
        if (filterSelected.length === 0) return array;
        return array.filter(project => {
            return filterSelected.some(filter => {
                const title = project.title ? project.title.toLowerCase() : '';
                return title.includes(filter.toLowerCase());
            });
        });
    };

    // Fonction principale pour vérifier et filtrer les projets
    const checkForProject = (value, array) => {
        // Filtrer les projets en fonction de la recherche textuelle
        const dataAfterSearchInput = sortProject(value, array);
        // Appliquer les filtres aux projets filtrés
        const dataAfterFilters = applyFilters(dataAfterSearchInput);
        // Mettre à jour les données de recherche
        setSearchData(dataAfterFilters);
    };

    // Gérer le changement d'entrée de texte
    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        if (value.length >= 3) {
            checkForProject(value, baseAllProjects);
        } else {
            setSearchData(baseAllProjects);
        }
    };

    // Mettre à jour les résultats de recherche lorsque la langue change
    useEffect(() => {
        if (searchValue.length >= 3) {
            checkForProject(searchValue, baseAllProjects);
        } else {
            setSearchData(baseAllProjects);
        }
    }, [language]);

    return (
        <div id='search-project' className='search-project'>
            <div className='container_search_filters'>
                <div className='container_input'>
                    <input
                        type="text"
                        placeholder={language === 'FR' ? 'Recherchez un projet par description ou langage de programmation' : 'Search a project by description or programming language'}
                        onChange={handleInputChange}
                        value={searchValue}
                    />
                </div>
            </div>
            <div className='container_results'>
            {
                searchValue.length > 0 && searchValue.length < 3 && filterSelected.length === 0 ? (
                    <div className='container_no_projects'>
                        <p className='indication_research'>
                            {language === 'FR' ? 'La recherche commence à partir de 3 caractères' : 'The search starts from 3 characters'}
                        </p>
                    </div>
                ) : searchValue.length > 0 ? (
                    searchData.length > 0 ? (
                        <CardSection datas={searchData} />
                    ) : (
                        <p>{language === 'FR' ? 'Aucun projet trouvé' : 'No project found'}</p>
                    )
                ) : null
            }
            </div>
        </div>
    );
};

export default SearchProject;
