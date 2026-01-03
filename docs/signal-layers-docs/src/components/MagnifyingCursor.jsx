import { useState, useEffect, useRef } from 'react';

export function MagnifyingCursor(){
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [scrollOffset, setScrollOffset] = useState({ x: 0, y: 0 });
    const mouseMoved = useRef(0);
    
    useEffect(() => {

        const handleMouseMove = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
            mouseMoved.current = 1;
        };
        
        const handleScroll = () => {
            setScrollOffset({ x: window.scrollX, y: window.scrollY });
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);
        
        handleScroll();
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    if(mouseMoved.current == 0) return null;
    
    return (
        <div 
            className="absolute z-50 h-16 w-16 rounded-full bg-white/30 pointer-events-none opacity-90"
            style={{ 
                transform: `translate(${pos.x + scrollOffset.x - 32}px, ${pos.y + scrollOffset.y - 32}px)`
            }}
        >
        </div>
    );
}