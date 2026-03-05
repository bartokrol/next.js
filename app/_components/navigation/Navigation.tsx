'use client';

import styles from './navigation.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION_DATA } from '@/app/constants';

export const Navigation = () => {
    const pathname = usePathname();
    
    return (
        <nav className={styles.navigation}>
            <Link className={styles.nextLink} href={'https://nextjs.org/'} target={'_blank'}>
                {/*  Next.js logo width === 394px, height === 80px */}
                {/*  Image height === 30px to fill whole height of the navigation (30px without padding) */}
                {/*  width === 148, calculations => 30 * 80 = 0.375, 394 * 0.375 = 147.75 */}
                <Image
                    className={styles.nextLogo}
                    src={'/next.svg'}
                    alt={'Next.js logo'}
                    height={30}
                    width={148}
                    priority
                />
            </Link>
            <ul className={styles.unorderedList} role={'menubar'}>
                {NAVIGATION_DATA.map(d => (
                    <li key={d.name} className={styles.listItem} role={'none'}>
                        <Link className={styles.listAnchor} href={d.href} role={'menuitem'} data-css-is-active={pathname === d.href}>
                            {d.name}
                            {!!d.children?.length && (
                                <Image
                                    src={'/dropdown-arrow.svg'}
                                    alt={'Dropdown arrow icon'}
                                    height={20}
                                    width={20}
                                />
                            )}
                        </Link>
                        {!!d.children?.length && (
                            <>
                                <ul className={styles.unorderedSublist} role={'menu'}>
                                    {d.children.map(c => (
                                        <li key={c.name} role={'none'}>
                                            <Link className={styles.sublistAnchor} href={c.href} role={'menuitem'}>
                                                {c.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};