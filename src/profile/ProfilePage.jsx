import React from 'react';

import Section from 'grommet/components/Section';
import List from 'grommet/components/List';

import MenuItem from 'components/MenuItem';

function ProfilePage() {
    return (
        <Section pad="none">
            <h1>My profile</h1>
            <List>
                <MenuItem link="/profile/applications" text="View my applications" />
                <MenuItem link="/profile/information" text="Edit profile information" />
                <MenuItem link="/profile/experience" text="View my experience" />
                <MenuItem link="/profile/education" text="View my education" />
            </List>
        </Section>
    );
}

export default ProfilePage;
