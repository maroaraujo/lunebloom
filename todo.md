# Lunebloom Project TODO

## Core Setup
- [x] Configure pastel color scheme and design tokens in index.css
- [x] Add Google Fonts (Quicksand, Open Sans) to index.html
- [x] Create shared layout components (Header, Footer, Navigation)

## Homepage
- [x] Hero section with Lunebloom mascot illustration placeholder
- [x] Interactive phase selection cards (5 phases)
- [x] Trust indicators section
- [x] Welcome message and value proposition
- [x] Custom PNG mascot image integrated (Landing page)

## Content Pages
- [x] Trying to Conceive page with all sections
- [x] First Trimester page with all sections
- [x] Second Trimester page with all sections
- [x] Third Trimester page with all sections
- [x] Postpartum page with all sections

## Page Sections (for each content page)
- [x] Nutrition section with supplement tables
- [x] Exercise section with muscle/benefit tables
- [x] Medical care section with test schedules
- [x] Skincare section with safe/unsafe ingredient tables
- [x] Mental health section with resources
- [x] Mocktail recipes (where applicable)

## Resources Page
- [x] Downloadable guides section
- [x] Glossary of terms
- [x] Support links and hotlines
- [x] Scientific references compilation

## Mascot Integration - COMPLETE
- [x] Lunebloom mascot SVG component for fallback
- [x] PageHero component updated to support custom PNG images
- [x] Landing page mascot (LandingpageLunebloom.png) integrated
- [x] Trying to Conceive mascot (TryingtoconcieveLunebloom.png) integrated
- [x] First Trimester mascot (FirstTrimesterLunebloom.png) integrated
- [x] Second Trimester mascot (SecondtrimesterLunebloom.png) integrated
- [x] Third Trimester mascot (thirdtrimesterLunebloom.png) integrated
- [x] Postpartum mascot (PostpartumLunebloom.png) integrated
- [x] Guide Lunebloom (lunebloomflipped.png) integrated in homepage CTA section
- [x] Guide Lunebloom integrated in Resources page header

## Design & Polish
- [x] Lunebloom mascot SVG illustrations for each section
- [x] Consistent pastel aesthetic throughout
- [x] Responsive design for mobile/tablet
- [x] Smooth animations and transitions
- [x] Custom PNG mascot images replacing SVG placeholders for all phases

## Bug Fixes
- [x] Fix scroll-to-top bug when navigating between pages

## Exercise Sections - COMPLETE
- [x] Research safe gym exercises for trying to conceive phase
- [x] Research safe gym exercises for first trimester
- [x] Research safe gym exercises for second trimester
- [x] Research safe gym exercises for third trimester
- [x] Research safe postpartum recovery exercises
- [x] Create GymExerciseModal component for detailed exercise display
- [x] Integrate exercise modals into TryingToConceiveExercises
- [x] Integrate exercise modals into FirstTrimesterExercises
- [x] Integrate exercise modals into SecondTrimesterExercises
- [x] Integrate exercise modals into ThirdTrimesterExercises
- [x] Integrate exercise modals into PostpartumExercises
- [x] All pages now have both regular exercise suggestions AND detailed gym exercise modals

## Content Audit & Revision - COMPLETE
- [x] Audit Trying to Conceive page content for scientific accuracy
- [x] Audit First Trimester page content for scientific accuracy
- [x] Audit Second Trimester page content for scientific accuracy
- [x] Audit Third Trimester page content for scientific accuracy
- [x] Audit Postpartum page content for scientific accuracy
- [x] All information backed by ACOG/WHO/NIH/CDC/FDA
- [x] Created SCIENTIFIC_SOURCES.md documentation file

## Exercise Section Restructuring - COMPLETE
- [x] Separate "Regular Exercise Suggestions" from "Safe Gym Exercises" sections
- [x] Add "Safe Gym Exercises" button that opens modal on all phase pages
- [x] Update TryingToConceive page exercise section structure
- [x] Update FirstTrimester page exercise section structure
- [x] Update SecondTrimester page exercise section structure
- [x] Update ThirdTrimester page exercise section structure
- [x] Update Postpartum page exercise section structure

## Chatbot Implementation - COMPLETE
- [x] Create scientific sources documentation with ACOG, CDC, NIH sources
- [x] Integrated existing AIChatBox component
- [x] Created floating "Ask Lunebloom" button component
- [x] Implemented chatbot logic to answer only from documentation
- [x] Added source citation system in system prompt
- [x] Added "Not found in documentation" response for out-of-scope questions
- [x] Integrated chatbot into App.tsx (appears on all pages)
- [x] Created comprehensive unit tests (7 tests, all passing)
- [x] Verified chatbot cites sources correctly

## Chatbot Enhancement - COMPLETE
- [x] Created comprehensive CHATBOT_KNOWLEDGE_BASE.md with all website content
- [x] Improved chatbot system prompt with full knowledge base
- [x] Chatbot references exercises with difficulty levels and sets/reps
- [x] Tested chatbot with pregnancy-related questions (9 tests, all passing)
- [x] Verified chatbot answers comprehensively from documentation
- [x] All tests passing (10/10)

## Missing TTC Information - COMPLETE
- [x] Researched fertile window calculation methods (ACOG/CDC sources)
- [x] Researched best practices for intercourse timing
- [x] Researched ovulation prediction methods and tests
- [x] Researched fertility tracking apps and methods
- [x] Added fertile window calculation section to TTC page
- [x] Added comprehensive ovulation testing section with 5 methods
- [x] Added intercourse timing for conception section
- [x] Updated SCIENTIFIC_SOURCES.md with fertility information sources
