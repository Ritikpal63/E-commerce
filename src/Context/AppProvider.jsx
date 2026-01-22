import { ProductProvider } from "./ProductContext";
import { TeamProvider } from "./TeamContext";
import { TestimonialProvider } from "./TestimonialContext";

const AppProvider = ({ children }) => {
  return (
    <ProductProvider>
      <TeamProvider>
        <TestimonialProvider>{children}</TestimonialProvider>
      </TeamProvider>
    </ProductProvider>
  );
};

export default AppProvider;
