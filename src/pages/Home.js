import React, { useState, useEffect } from 'react';

import Page from '../components/Page';
import Filter from '../components/Filters';
import List from '../components/List';
import projetos from '../dados/conteudo';

const Home = () => {
  const [projetosFiltrados, setProjetosFiltrados] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');
  const [uniqueTags, setUniqueTags] = useState([]);

  const verifyCategories = (categories, tag) => {
    const categoriesToLowerCase = categories.map((category) => category.toLowerCase());
    return categoriesToLowerCase.includes(tag);
  };

  const filterProjects = () => {
    const filteredProjects = projetos.filter((projeto) => {
      const searchTermLowerCase = searchTerm.toLowerCase();
      const project = projeto.nomeDoProjeto.toLowerCase();
      const name = projeto.nome.toLowerCase();
      const hasCategory = selectedTag === 'all' || verifyCategories(projeto.tags, selectedTag);

      return hasCategory && (project.includes(searchTermLowerCase) || name.includes(searchTermLowerCase));
    });

    setProjetosFiltrados(filteredProjects);
  };

  const updateSearchTerm = (term) => {
    setSearchTerm(term);
  };

  const updateSelectedTag = (tag) => {
    setSelectedTag(tag);
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
    console.log(selectedTag);
  }, [searchTerm, selectedTag]);

  return (
    <Page>
      <Filter
        tags={uniqueTags}
        updateSearchTerm={updateSearchTerm}
        selectedTag={selectedTag}
        updateSelectedTag={updateSelectedTag}
      />
      <List projetos={projetosFiltrados} />
    </Page>
  );
};

export default Home;
