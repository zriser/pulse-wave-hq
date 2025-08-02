import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Palette, Zap, Building, Code } from 'lucide-react';

const themes = [
  {
    name: 'Cyberpunk Tech',
    value: '',
    icon: Zap,
    description: 'Dark navy with electric cyan pulses'
  },
  {
    name: 'Minimalist Clean',
    value: 'minimal',
    icon: Palette,
    description: 'Clean white with precise blue accents'
  },
  {
    name: 'Corporate Professional',
    value: 'corporate',
    icon: Building,
    description: 'Professional grays with warm orange highlights'
  },
  {
    name: 'Matrix Noir',
    value: 'matrix',
    icon: Code,
    description: 'Pure black with classic green terminal glow'
  }
];

const ThemeSelector = () => {
  const [currentTheme, setCurrentTheme] = useState('');

  const switchTheme = (themeValue: string) => {
    setCurrentTheme(themeValue);
    if (themeValue === '') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', themeValue);
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg">
        <h3 className="text-sm font-semibold mb-3 text-foreground">Design Themes</h3>
        <div className="space-y-2">
          {themes.map((theme) => (
            <Button
              key={theme.value}
              variant={currentTheme === theme.value ? "default" : "ghost"}
              size="sm"
              onClick={() => switchTheme(theme.value)}
              className="w-full justify-start text-xs"
            >
              <theme.icon className="w-3 h-3 mr-2" />
              {theme.name}
            </Button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-3">
          {themes.find(t => t.value === currentTheme)?.description}
        </p>
      </div>
    </div>
  );
};

export default ThemeSelector;