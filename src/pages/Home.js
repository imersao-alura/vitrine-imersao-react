import React, { useState, useEffect } from 'react';

import Page from '../components/Page';
import Filter from '../components/Filters';
import List from '../components/List';
import projetos from '../dados/conteudo';

const Home = () => {
  const [projetosFiltrados, setProjetosFiltrados] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [uniqueTags, setUniqueTags] = useState([]);

  const verifyCategories = (categories) => {
    const categoriesToLowerCase = categories.map((category) => category.toLowerCase());

    const filteredCategories = categoriesToLowerCase.filter((tag) => selectedTags.includes(tag));

    return filteredCategories.length;
  };

  const filterProjects = () => {
    const filteredProjects = projetos.filter((projeto) => {
      const searchTermLowerCase = searchTerm.toLowerCase();
      const project = projeto.nomeDoProjeto.toLowerCase();
      const name = projeto.nome.toLowerCase();

      const hasCategory = selectedTags.length === 0 || verifyCategories(projeto.tags);

      return (
        hasCategory
        && (
          project.includes(searchTermLowerCase)
          || name.includes(searchTermLowerCase)
        )
      );
    });
    const valueToUpdate = selectedTags.length > 0 || searchTerm ? filteredProjects : projetos;
    setProjetosFiltrados(valueToUpdate);
  };

  const updateSearchTerm = (term) => {
    setSearchTerm(term);
  };

  const updateSelectedTags = (tag) => {
    setSelectedTags(tag);
  };

  useEffect(() => {
    setProjetosFiltrados(projetos);
    const tags = projetos.map((projeto) => projeto.tags);
    const orderTags = [];

    tags.forEach((tagArray) => {
      tagArray.forEach((tag) => {
        if (!orderTags.includes(tag.toLowerCase())) {
          orderTags.push(tag.toLowerCase());
        }
      });
    });
    setUniqueTags(orderTags);
  }, []);

  useEffect(() => {
    filterProjects();
  }, [searchTerm, selectedTags]);

  return (
    <Page>
      <Filter
        tags={uniqueTags}
        updateSearchTerm={updateSearchTerm}
        selectedTags={selectedTags}
        updateSelectedTags={updateSelectedTags}
      />
      <List projetos={projetosFiltrados} />
    </Page>
  );
};

export default Home;
