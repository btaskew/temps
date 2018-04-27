import React from 'react';
import Layer from 'grommet/components/Layer';
import Section from 'grommet/components/Section';
import Spinning from 'grommet/components/icons/Spinning';

function Loading() {
    return (
        <Layer>
            <Section flex={true} direction="row">
                Loading... <Spinning id="loading-spinner" />
            </Section>
        </Layer>
    );
}

export default Loading;
