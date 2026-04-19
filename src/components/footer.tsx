import Link from 'next/link';
import { PawPrint } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center space-x-2">
              <PawPrint className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">猫狗物语</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              探索猫狗文化，温暖养宠生活
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">快速导航</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/knowledge" className="hover:text-foreground transition-colors">
                  科普百科
                </Link>
              </li>
              <li>
                <Link href="/virtual" className="hover:text-foreground transition-colors">
                  虚实养宠
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-foreground transition-colors">
                  养宠服务
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-foreground transition-colors">
                  社区救助
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-3">资源中心</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/knowledge/culture" className="hover:text-foreground transition-colors">
                  文化史专栏
                </Link>
              </li>
              <li>
                <Link href="/services/hospitals" className="hover:text-foreground transition-colors">
                  医院查询
                </Link>
              </li>
              <li>
                <Link href="/services/shop" className="hover:text-foreground transition-colors">
                  非遗好物
                </Link>
              </li>
              <li>
                <Link href="/community/rescue" className="hover:text-foreground transition-colors">
                  流浪救助
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2025 猫狗物语. 保留所有权利.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
