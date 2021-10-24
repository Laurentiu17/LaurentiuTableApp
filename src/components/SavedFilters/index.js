import React, { useState } from 'react';

import { TaskDone, DropdownArrow, Private } from '@icons';

import * as S from './styles';
/* eslint react/prop-types: 0 */

const SavedFilters = ({ savedFilters }) => {
  const [isSavedFiltersOpen, setSavedFiltersOpen] = useState(false);

  const DisplayFilters = ({ itemDetails }) => {
    return (
      <>
        {itemDetails && (
          <S.SavedFilterClosed>
            <TaskDone />
            <S.SavedFilterClosedName>
              {itemDetails.name}
            </S.SavedFilterClosedName>
          </S.SavedFilterClosed>
        )}
      </>
    );
  };

  const DisplayFiltersAll = ({ itemDetails }) => {
    return (
      <>
        {itemDetails && (
          <S.SavedFiterAll isFilterPrivate={itemDetails.isPrivate}>
            {itemDetails.name}
            {itemDetails.isPrivate && (
              <S.PrivateIcon>
                <Private />
              </S.PrivateIcon>
            )}
          </S.SavedFiterAll>
        )}
      </>
    );
  };
  return (
    <>
      {savedFilters &&
        (savedFilters.myFilters || savedFilters.otherPublicFilters) && (
          <>
            {!isSavedFiltersOpen && (
              <S.SavedFilters>
                <S.FiltersTitle>Saved Filters</S.FiltersTitle>
                {savedFilters.myFilters &&
                  savedFilters.myFilters.map((item, i) => {
                    if (i < 1) {
                      return (
                        <DisplayFilters key={item.pkey} itemDetails={item} />
                      );
                    }
                  })}

                {savedFilters.otherPublicFilters &&
                  savedFilters.otherPublicFilters.map(item => (
                    <DisplayFilters key={item.pkey} itemDetails={item} />
                  ))}

                <S.FiltersMore onClick={() => setSavedFiltersOpen(true)}>
                  <S.Dots />
                </S.FiltersMore>
              </S.SavedFilters>
            )}
            {isSavedFiltersOpen && (
              <S.SavedFiltersOpen>
                <S.FiltersTitleAll>
                  <div>Saved Filters</div>
                  <S.DropdownWrapper onClick={() => setSavedFiltersOpen(false)}>
                    <DropdownArrow />
                  </S.DropdownWrapper>
                </S.FiltersTitleAll>

                <S.FiltersAll>
                  {savedFilters.myFilters && (
                    <S.FiltersAllMyFilters>
                      <S.FiltersAllSubtitle>My Filters </S.FiltersAllSubtitle>
                      {savedFilters.myFilters.map(item => (
                        <DisplayFiltersAll key={item.pkey} itemDetails={item} />
                      ))}
                    </S.FiltersAllMyFilters>
                  )}
                  {savedFilters.otherPublicFilters && (
                    <S.FiltersAllPublicFilters>
                      <S.FiltersAllSubtitle>
                        Public Filters
                      </S.FiltersAllSubtitle>
                      {savedFilters.otherPublicFilters.map(item => (
                        <DisplayFiltersAll key={item.pkey} itemDetails={item} />
                      ))}
                    </S.FiltersAllPublicFilters>
                  )}
                </S.FiltersAll>
              </S.SavedFiltersOpen>
            )}
          </>
        )}
    </>
  );
};

export default SavedFilters;
