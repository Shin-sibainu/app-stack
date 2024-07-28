/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Qjqsl9NwdBn
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "@/components/ui/pagination";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[calc(100vh_-_theme(spacing.16)_-_theme(spacing.16))]">
      <div className="container mx-auto px-4 md:px-6 py-8">
        {/* search and filter */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-full max-w-xl">
            <form className="flex items-center bg-background rounded-md shadow-sm">
              <Input
                type="search"
                placeholder="Search for apps or tech stacks"
                className="flex-1 px-4 py-2 rounded-l-md focus:outline-none"
              />
              <Button
                type="submit"
                variant="ghost"
                className="px-4 py-2 rounded-r-md"
              >
                <SearchIcon className="w-5 h-5" />
              </Button>
            </form>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <FilterIcon className="w-4 h-4" />
                  Categories
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuLabel>Categories</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>Web</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Mobile</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>AI/ML</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>DevOps</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Database</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <ListOrderedIcon className="w-4 h-4" />
                  Sort By
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuLabel>Sort By</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value="popularity">
                  <DropdownMenuRadioItem value="popularity">
                    Popularity
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="recent">
                    Recent Updates
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button>Apply Filters</Button>
          </div>
        </div>

        {/* app card list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          <Card className="relative group flex items-center justify-center pt-6">
            <CardContent className="flex flex-col items-center justify-between gap-4">
              <Image
                src="/placeholder.svg"
                width={80}
                height={80}
                alt="Tech Stack Logo"
                className="rounded-full"
              />
              <div className="text-center">
                <h3 className="text-lg font-medium">React.js</h3>
                <p className="text-sm text-muted-foreground">
                  A JavaScript library for building user interfaces.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">Frontend</Badge>
                  <Badge variant="outline">UI</Badge>
                </div>
              </div>
              <Link
                href={"/"}
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                View Details
              </Link>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center items-center gap-4 mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}

function FilterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function ListOrderedIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
