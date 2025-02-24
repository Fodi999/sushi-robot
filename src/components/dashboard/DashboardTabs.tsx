import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import RecommendedProducts from "@/components/dashboard/RecommendedProducts";
import ProfileSettings from "@/components/dashboard/ProfileSettings";
import Preferences from "@/components/dashboard/Preferences";
import Cart from "@/components/dashboard/Cart";
import OrdersStats from "@/components/dashboard/OrdersStats";
import Bonuses from "@/components/dashboard/Bonuses";
import OrderStatus from "@/components/dashboard/OrderStatus";
import Support from "@/components/dashboard/Support";
import Social from "@/components/dashboard/Social";
import { Guest, AutomationCardProps } from "../types";
import { Home, User, Settings, ShoppingCart, Box, CreditCard, Truck, HelpCircle, Share2 } from "lucide-react"; // Импортируем иконки

interface DashboardTabsProps {
  guest: Guest;
  filteredProducts: AutomationCardProps[];
  selectedCategory: AutomationCardProps["category"];
  setSelectedCategory: (category: AutomationCardProps["category"]) => void;
  cartItems: AutomationCardProps[];
  addToCart: (item: AutomationCardProps) => void;
  removeFromCart: (index: number) => void;
}

export default function DashboardTabs({
  guest,
  filteredProducts,
  selectedCategory,
  setSelectedCategory,
  cartItems,
  addToCart,
  removeFromCart,
}: DashboardTabsProps) {
  const categories: AutomationCardProps["category"][] = ["суши", "роллы", "сашими", "салаты", "закуски"];

  return (
    <Tabs defaultValue="home" className="space-y-6">
      <div className="overflow-x-auto">
        <TabsList className="flex space-x-2 min-w-max border-b border-gray-950">
          {["home", "profile", "preferences", "cart", "ordersStats", "bonuses", "orderStatus", "support", "social"].map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="px-3 py-1 rounded-md transition-colors duration-200 hover:bg-indigo-100 focus:ring-2 focus:ring-indigo-500 data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
            >
              {/* Иконки и текст вкладок */}
              {tab === "home" ? <Home className="mr-2 w-5 h-5" /> : null}
              {tab === "profile" ? <User className="mr-2 w-5 h-5" /> : null}
              {tab === "preferences" ? <Settings className="mr-2 w-5 h-5" /> : null}
              {tab === "cart" ? <ShoppingCart className="mr-2 w-5 h-5" /> : null}
              {tab === "ordersStats" ? <Box className="mr-2 w-5 h-5" /> : null}
              {tab === "bonuses" ? <CreditCard className="mr-2 w-5 h-5" /> : null}
              {tab === "orderStatus" ? <Truck className="mr-2 w-5 h-5" /> : null}
              {tab === "support" ? <HelpCircle className="mr-2 w-5 h-5" /> : null}
              {tab === "social" ? <Share2 className="mr-2 w-5 h-5" /> : null}

              {/* Названия вкладок */}
              {tab === "home" ? "Главная" :
               tab === "profile" ? "Профиль" :
               tab === "preferences" ? "Предпочтения" :
               tab === "cart" ? "Корзина" :
               tab === "ordersStats" ? "Заказы и калории" :
               tab === "bonuses" ? "Бонусы" :
               tab === "orderStatus" ? "Статус заказа" :
               tab === "support" ? "Поддержка" : "Соцсети"}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      <TabsContent value="home" className="space-y-6">
        <RecommendedProducts
          filteredProducts={filteredProducts}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          addToCart={addToCart}
          categories={categories}
        />
      </TabsContent>
      <TabsContent value="profile" className="space-y-6">
        <ProfileSettings guest={guest} />
      </TabsContent>
      <TabsContent value="preferences" className="space-y-6">
        <Preferences />
      </TabsContent>
      <TabsContent value="cart" className="space-y-6">
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </TabsContent>
      <TabsContent value="ordersStats" className="space-y-6">
        <OrdersStats />
      </TabsContent>
      <TabsContent value="bonuses" className="space-y-6">
        <Bonuses />
      </TabsContent>
      <TabsContent value="orderStatus" className="space-y-6">
        <OrderStatus />
      </TabsContent>
      <TabsContent value="support" className="space-y-6">
        <Support />
      </TabsContent>
      <TabsContent value="social" className="space-y-6">
        <Social />
      </TabsContent>
      <Button variant="secondary" className="w-full mt-4 text-xs sm:text-sm">
        + Новый чат
      </Button>
    </Tabs>
  );
}


