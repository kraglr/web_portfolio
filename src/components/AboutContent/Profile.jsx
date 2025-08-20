import LandingPage from "../Home/LandingPage";

const Profile = ({ scrollToPortfolio, scrollToContact, scrollToNext }) => {
  // This component primarily acts as a container for the LandingPage,
  // passing down scroll-to-section functions.
  // The wrapping divs have been removed as LandingPage is a self-contained,
  // full-screen component. Unused state, imports, and commented-out
  // legacy code have also been cleaned up for better readability and maintenance.
  return (
    <LandingPage
      scrollToContact={scrollToContact}
      scrollToPortfolio={scrollToPortfolio}
      scrollToNext={scrollToNext}
    />
  );
};

export default Profile;
