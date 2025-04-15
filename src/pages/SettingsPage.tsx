"use client";

import type React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Card } from "../components/ui/cards/Card";

const PageContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: max-content;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing[2]};
  }
`;

const PageTitle = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
  font-weight: ${({ theme }) => theme.typography.h4.fontWeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const SettingsLayout = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const SettingsNav = styled.nav`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li<{ active: boolean }>`
  margin-bottom: ${({ theme }) => theme.spacing[1]};

  a {
    display: flex;
    align-items: center;
    padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    text-decoration: none;
    color: ${({ active, theme }) =>
      active ? theme.colors.primary.main : theme.colors.text.primary};
    background-color: ${({ active, theme }) =>
      active ? `${theme.colors.primary.main}10` : "transparent"};
    font-weight: ${({ active }) => (active ? 600 : 400)};
    transition: all 0.2s ease;

    &:hover {
      background-color: ${({ theme, active }) =>
        active
          ? `${theme.colors.primary.main}20`
          : theme.colors.background.light};
    }
  }
`;

const SettingsContent = styled.div``;

const SettingsCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const SettingsSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[5]};

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  margin: 0 0 ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  font-weight: ${({ theme }) => theme.typography.h6.fontWeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing[1]};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const FormInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.background.paper};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.background.paper};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;

const ThemeOptionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: ${({ theme }) => theme.spacing[3]};
  margin-top: ${({ theme }) => theme.spacing[2]};
`;

const ThemeOption = styled.div<{ active: boolean; universe: string }>`
  position: relative;
  height: 100px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  cursor: pointer;
  border: 2px solid
    ${({ active, theme }) =>
      active ? theme.colors.primary.main : "transparent"};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ universe, theme }) => {
      switch (universe) {
        case "cybertech":
          return "linear-gradient(135deg, #0a0a1e 0%, #00f0ff 100%)";
        case "fantasy":
          return "linear-gradient(135deg, #2d3748 0%, #9f7aea 100%)";
        case "corporate":
          return "linear-gradient(135deg, #f7fafc 0%, #3182ce 100%)";
        case "cosmic":
          return "linear-gradient(135deg, #000000 0%, #805ad5 100%)";
        case "steampunk":
          return "linear-gradient(135deg, #2d2a22 0%, #b7791f 100%)";
        default:
          return theme.colors.background.gradient;
      }
    }};
  }

  &::after {
    /* content: "${({ universe }) =>
      universe.charAt(0).toUpperCase() + universe.slice(1)}"; */
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: white;
    font-weight: 600;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  }
`;

const Button = styled.div`
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[4]}`};
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.primary.contrastText};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.button.fontSize};
  font-weight: ${({ theme }) => theme.typography.button.fontWeight};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grey[300]};
    cursor: not-allowed;
  }
`;

const DangerButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.error.main};

  &:hover {
    background-color: ${({ theme }) => theme.colors.error.dark};
  }
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.grey[300]};
    transition: 0.4s;
    border-radius: 34px;

    &:before {
      position: absolute;
      content: "";
      height: 16px;
      width: 16px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: 0.4s;
      border-radius: 50%;
    }
  }

  input:checked + span {
    background-color: ${({ theme }) => theme.colors.primary.main};
  }

  input:checked + span:before {
    transform: translateX(26px);
  }
`;

const SettingsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing[2]} 0`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};

  &:last-child {
    border-bottom: none;
  }
`;

const SettingsRowLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const SettingsRowDescription = styled.div`
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-top: ${({ theme }) => theme.spacing[1]};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[4]};
`;

const SettingsPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState("account");
  const [selectedTheme, setSelectedTheme] = useState("default");
  const [selectedUniverse, setSelectedUniverse] = useState("corporate");

  const universes = [
    "cybertech",
    "fantasy",
    "corporate",
    "cosmic",
    "steampunk",
  ];

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Settings</PageTitle>
      </PageHeader>

      <SettingsLayout>
        <SettingsNav>
          <NavList>
            <NavItem active={activeSection === "account"}>
              <a href="#account" onClick={() => setActiveSection("account")}>
                Account
              </a>
            </NavItem>
            <NavItem active={activeSection === "appearance"}>
              <a
                href="#appearance"
                onClick={() => setActiveSection("appearance")}
              >
                Appearance
              </a>
            </NavItem>
            <NavItem active={activeSection === "notifications"}>
              <a
                href="#notifications"
                onClick={() => setActiveSection("notifications")}
              >
                Notifications
              </a>
            </NavItem>
            <NavItem active={activeSection === "privacy"}>
              <a href="#privacy" onClick={() => setActiveSection("privacy")}>
                Privacy & Security
              </a>
            </NavItem>
            <NavItem active={activeSection === "billing"}>
              <a href="#billing" onClick={() => setActiveSection("billing")}>
                Billing
              </a>
            </NavItem>
          </NavList>
        </SettingsNav>

        <SettingsContent>
          {activeSection === "account" && (
            <SettingsCard>
              <SettingsSection>
                <SectionTitle>Account Information</SectionTitle>
                <FormGroup>
                  <FormLabel>Email Address</FormLabel>
                  <FormInput type="email" defaultValue="john.doe@example.com" />
                </FormGroup>
                <FormGroup>
                  <FormLabel>Full Name</FormLabel>
                  <FormInput type="text" defaultValue="John Doe" />
                </FormGroup>
                <FormGroup>
                  <FormLabel>Username</FormLabel>
                  <FormInput type="text" defaultValue="johndoe" />
                </FormGroup>
                <ButtonGroup>
                  <Button>Save Changes</Button>
                </ButtonGroup>
              </SettingsSection>

              <SettingsSection>
                <SectionTitle>Change Password</SectionTitle>
                <FormGroup>
                  <FormLabel>Current Password</FormLabel>
                  <FormInput type="password" />
                </FormGroup>
                <FormGroup>
                  <FormLabel>New Password</FormLabel>
                  <FormInput type="password" />
                </FormGroup>
                <FormGroup>
                  <FormLabel>Confirm New Password</FormLabel>
                  <FormInput type="password" />
                </FormGroup>
                <ButtonGroup>
                  <Button>Update Password</Button>
                </ButtonGroup>
              </SettingsSection>

              <SettingsSection>
                <SectionTitle>Danger Zone</SectionTitle>
                <p>
                  Once you delete your account, there is no going back. Please
                  be certain.
                </p>
                <DangerButton>Delete Account</DangerButton>
              </SettingsSection>
            </SettingsCard>
          )}

          {activeSection === "appearance" && (
            <SettingsCard>
              <SettingsSection>
                <SectionTitle>Theme</SectionTitle>
                <FormGroup>
                  <FormLabel>Color Mode</FormLabel>
                  <FormSelect
                    value={selectedTheme}
                    onChange={(e) => setSelectedTheme(e.target.value)}
                  >
                    <option value="default">System Default</option>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                  </FormSelect>
                </FormGroup>
              </SettingsSection>

              <SettingsSection>
                <SectionTitle>Universe Theme</SectionTitle>
                <p>Choose a universe theme for your experience.</p>
                <ThemeOptionContainer>
                  {universes.map((universe) => (
                    <ThemeOption
                      key={universe}
                      universe={universe}
                      active={selectedUniverse === universe}
                      onClick={() => setSelectedUniverse(universe)}
                    />
                  ))}
                </ThemeOptionContainer>
                <ButtonGroup>
                  <Button>Apply Theme</Button>
                </ButtonGroup>
              </SettingsSection>
            </SettingsCard>
          )}

          {activeSection === "notifications" && (
            <SettingsCard>
              <SettingsSection>
                <SectionTitle>Email Notifications</SectionTitle>
                <SettingsRow>
                  <div>
                    <SettingsRowLabel>Job Recommendations</SettingsRowLabel>
                    <SettingsRowDescription>
                      Receive personalized job recommendations
                    </SettingsRowDescription>
                  </div>
                  <ToggleSwitch>
                    <input type="checkbox" defaultChecked />
                    <span></span>
                  </ToggleSwitch>
                </SettingsRow>
                <SettingsRow>
                  <div>
                    <SettingsRowLabel>Application Updates</SettingsRowLabel>
                    <SettingsRowDescription>
                      Updates about your job applications
                    </SettingsRowDescription>
                  </div>
                  <ToggleSwitch>
                    <input type="checkbox" defaultChecked />
                    <span></span>
                  </ToggleSwitch>
                </SettingsRow>
                <SettingsRow>
                  <div>
                    <SettingsRowLabel>Network Activity</SettingsRowLabel>
                    <SettingsRowDescription>
                      Updates from your professional network
                    </SettingsRowDescription>
                  </div>
                  <ToggleSwitch>
                    <input type="checkbox" defaultChecked />
                    <span></span>
                  </ToggleSwitch>
                </SettingsRow>
                <SettingsRow>
                  <div>
                    <SettingsRowLabel>Marketing Emails</SettingsRowLabel>
                    <SettingsRowDescription>
                      Promotional content and special offers
                    </SettingsRowDescription>
                  </div>
                  <ToggleSwitch>
                    <input type="checkbox" />
                    <span></span>
                  </ToggleSwitch>
                </SettingsRow>
              </SettingsSection>

              <SettingsSection>
                <SectionTitle>Push Notifications</SectionTitle>
                <SettingsRow>
                  <div>
                    <SettingsRowLabel>Messages</SettingsRowLabel>
                    <SettingsRowDescription>
                      Notifications for new messages
                    </SettingsRowDescription>
                  </div>
                  <ToggleSwitch>
                    <input type="checkbox" defaultChecked />
                    <span></span>
                  </ToggleSwitch>
                </SettingsRow>
                <SettingsRow>
                  <div>
                    <SettingsRowLabel>Job Alerts</SettingsRowLabel>
                    <SettingsRowDescription>
                      Notifications for new job matches
                    </SettingsRowDescription>
                  </div>
                  <ToggleSwitch>
                    <input type="checkbox" defaultChecked />
                    <span></span>
                  </ToggleSwitch>
                </SettingsRow>
              </SettingsSection>
            </SettingsCard>
          )}

          {activeSection === "privacy" && (
            <SettingsCard>
              <SettingsSection>
                <SectionTitle>Privacy Settings</SectionTitle>
                <SettingsRow>
                  <div>
                    <SettingsRowLabel>Profile Visibility</SettingsRowLabel>
                    <SettingsRowDescription>
                      Control who can see your profile
                    </SettingsRowDescription>
                  </div>
                  <FormSelect defaultValue="everyone">
                    <option value="everyone">Everyone</option>
                    <option value="connections">Connections Only</option>
                    <option value="private">Private</option>
                  </FormSelect>
                </SettingsRow>
                <SettingsRow>
                  <div>
                    <SettingsRowLabel>Activity Status</SettingsRowLabel>
                    <SettingsRowDescription>
                      Show when you're active on the platform
                    </SettingsRowDescription>
                  </div>
                  <ToggleSwitch>
                    <input type="checkbox" defaultChecked />
                    <span></span>
                  </ToggleSwitch>
                </SettingsRow>
              </SettingsSection>

              <SettingsSection>
                <SectionTitle>Security</SectionTitle>
                <SettingsRow>
                  <div>
                    <SettingsRowLabel>
                      Two-Factor Authentication
                    </SettingsRowLabel>
                    <SettingsRowDescription>
                      Add an extra layer of security to your account
                    </SettingsRowDescription>
                  </div>
                  <Button>Enable</Button>
                </SettingsRow>
                <SettingsRow>
                  <div>
                    <SettingsRowLabel>Active Sessions</SettingsRowLabel>
                    <SettingsRowDescription>
                      Manage devices where you're logged in
                    </SettingsRowDescription>
                  </div>
                  <Button>Manage</Button>
                </SettingsRow>
              </SettingsSection>
            </SettingsCard>
          )}

          {activeSection === "billing" && (
            <SettingsCard>
              <SettingsSection>
                <SectionTitle>Subscription</SectionTitle>
                <p>
                  You are currently on the <strong>Free Plan</strong>.
                </p>
                <Button>Upgrade to Premium</Button>
              </SettingsSection>

              <SettingsSection>
                <SectionTitle>Payment Methods</SectionTitle>
                <p>No payment methods added yet.</p>
                <Button>Add Payment Method</Button>
              </SettingsSection>
            </SettingsCard>
          )}
        </SettingsContent>
      </SettingsLayout>
    </PageContainer>
  );
};

export default SettingsPage;
